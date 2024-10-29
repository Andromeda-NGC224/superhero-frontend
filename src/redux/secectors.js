export const selectSuperheroes = (state) => state.superheroes.superheroes;
export const selectIsLoading = (state) => state.superheroes.isLoading;
export const selectError = (state) => state.superheroes.error;
export const selectCurrentPage = (state) => state.superheroes.currentPage;
export const selectHasNextPage = (state) => state.superheroes.hasNextPage;
export const selectHasPreviousPage = (state) =>
  state.superheroes.hasPreviousPage;
export const selectTotalPages = (state) => state.superheroes.totalPages;
