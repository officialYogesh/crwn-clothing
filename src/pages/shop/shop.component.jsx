import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { collection, getDocs } from "@firebase/firestore";

// import {
//   convertCollectionsSnapshotToMap,
//   db,
// } from "../../firebase/firebase.utils";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.componet";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    // const { updateCollections } = this.props;
    // * Below code to sync data in real time with observable
    // ! Don't forget to unsubscribe
    // const collectionRef = collection(db, "collections");
    // this.unsubscribeFromSnapshot = onSnapshot(collectionRef, (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // * Below code to fetch data once using firebase methods
    // getDocs(collection(db, "collections")).then((docs) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(docs);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // * Below code to use default fetch method to get documents from firebase firestore db
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-506c5/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(`collections`, collections));

    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
