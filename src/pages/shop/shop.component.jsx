import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { collection, getDocs } from "@firebase/firestore";

import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.componet";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    // * Below code to sync data in real time with observable
    // const collectionRef = collection(db, "collections");
    // this.unsubscribeFromSnapshot = onSnapshot(collectionRef, (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // * Below code to fetch data once using firebase methods
    getDocs(collection(db, "collections")).then((docs) => {
      const collectionsMap = convertCollectionsSnapshotToMap(docs);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
    // * Below code to use default fetch method to get documents from firebase firestore db
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-506c5/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(`collections`, collections));
  }

  render() {
    const { loading } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
