import { useQueryClient } from "react-query";

export default function useQueryHandler() {
  const queryClient = useQueryClient();

  const clearQueryCache = (keyList: any) => {
    const allQueries = queryClient.getQueryCache().findAll();
    const keyObject = {} as any;

    keyList.map((value: any) => (keyObject[value] = true));
    let list = allQueries
      .filter((query) => {
        return (
          keyObject[query.queryKey[0] as any] ||
          keyObject[query.queryKey as any]
        );
      })
      .map((value) => {
        queryClient.invalidateQueries(value.queryKey as any); // 쿼리를 무효화
        queryClient.refetchQueries(
          value.queryKey as any,
          { active: true } as any
        ); // 활성 쿼리만 즉시 refetch
      });
  };

  const deleteQueryCache = (id: any, keyList: any) => {
    const allQueries = queryClient.getQueryCache().findAll();
    const keyObject = {} as any;

    keyList.map((value: any) => (keyObject[value] = true));
    let list = allQueries
      .filter((query) => {
        return (
          keyObject[query.queryKey[0] as any] ||
          keyObject[query.queryKey as any]
        );
      })
      .map((value) => {
        let data = queryClient.getQueryData(value.queryKey) as any;
        if (data && data?.pages && data?.pageParams) {
          data.pages = data.pages.map((pages: any) => {
            pages.list = pages.list
              .filter((item: any) => item.id != id)
              .map((v: any) => v);
            return pages;
          });
        }
        queryClient.setQueryData(value.queryKey, data);
      });

    return list;
  };

  const updateQueryCache = (
    id: any,
    keyList: any,
    updateKeyMap: any,
    subParams?: any
  ) => {
    const allQueries = queryClient.getQueryCache().findAll();
    const keyObject = {} as any;

    keyList.map((value: any) => (keyObject[value] = true));

    let list = allQueries
      .filter((query) => {
        return (
          keyObject[query.queryKey[0] as any] ||
          keyObject[query.queryKey as any]
        );
      })
      .map((value) => {
        let data = queryClient.getQueryData(value.queryKey) as any;
        if (data && data?.pages && data?.pageParams) {
          data.pages = data.pages.map((pages: any) => pages);
        }
        if (data && data?.data && data?.data?.length) {
          data?.data?.map((item: any) => {
            if (item.id == id || id == "all") {
              for (let key in updateKeyMap) {
                item[key] = updateKeyMap[key];
              }
            }
          });
        } else {
          if (data && data?.data) {
            for (let key in updateKeyMap) {
              data.data[key] = updateKeyMap[key];
            }
          }
        }
        if (data && data?.list && data?.list?.length) {
          data?.list?.map((item: any) => {
            if (item.id == id || id == "all") {
              for (let key in updateKeyMap) {
                item[key] = updateKeyMap[key];
              }
            }

            for (let key in subParams) {
              if (
                item[key] &&
                subParams[key].type &&
                subParams[key].type == "list"
              ) {
                item[key]?.map((v: any) => {
                  if (v.id == id || id == "all") {
                    for (let key in updateKeyMap) {
                      v[key] = updateKeyMap[key];
                    }
                  }
                });
              }
            }
          });
        }

        if (data && (data?.pages || data?.data || data?.list)) {
          queryClient.setQueryData(
            value.queryKey,
            data,
            { updatedAt: new Date().getTime() } // updatedAt을 현재 시간으로 설정
          );
        }

        return value;
      });
    return list;
  };

  return {
    deleteQueryCache,
    updateQueryCache,
    clearQueryCache,
  };
}
