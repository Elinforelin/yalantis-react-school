export const clearProductListConstant = (state) => {
  state.list = [];
  state.perPage = 50;
  state.totalItems = 0;
  state.page = 1;
  state.origins = [];
  state.minPrice = 0;
  state.maxPrice = 0;
  state.status = '';
  state.error = '';
  state.editable = false;
}