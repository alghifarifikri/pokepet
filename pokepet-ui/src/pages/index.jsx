import List from "@/components/Organisms/List";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, increaseLimit } from "@/store/pokemon/slice";

function MainPage() {
  const dispatch = useDispatch();
  const { list, status, loading, hasMore, limit, offset } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemon({ size: limit, page: offset }));
  }, [dispatch, limit, offset]);

  window.onscroll = () => {
    if (
      document.documentElement.scrollHeight - window.innerHeight <=
        document.documentElement.scrollTop ||
      loading ||
      !hasMore
    )
      dispatch(increaseLimit());
  };

  return (
    <div>
      <List list={list} status={status} loadData={loading} hasMore={hasMore} />
    </div>
  );
}

export default MainPage;
