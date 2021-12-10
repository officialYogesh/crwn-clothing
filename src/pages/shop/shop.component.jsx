import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
// import { collection, getDocs } from "@firebase/firestore";

// import {
//   convertCollectionsSnapshotToMap,
//   db,
// } from "../../firebase/firebase.utils";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

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

    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          // render={(props) => (
          //   <CollectionOverviewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
