import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// * Below code for Redux Thunk implementation of Async actions. This is currently replaced with the use of Redux Saga
// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     dispatch(fetchCollectionsStart());
//     getDocs(collection(db, "collections"))
//       .then((docs) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(docs);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => {
//         dispatch(fetchCollectionsFailure(error.message));
//       });
//   };
// };
