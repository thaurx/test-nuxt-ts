export default ({ store, redirect }) => {
  // If the user is not authenticated
  if (store.state.authenticated === false) {
    return redirect('/login')
  }
}
