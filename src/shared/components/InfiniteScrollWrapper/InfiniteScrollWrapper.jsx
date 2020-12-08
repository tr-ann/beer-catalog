import React, { useEffect, useState } from 'react';

export default function withInfiniteScroll(WrappedComponent) {
  return function ComponentWithScroll(props) {
    // eslint-disable-next-line react/prop-types
    const { doLoadData } = props;
    const [page, setPage] = useState(1);

    useEffect(() => {
      doLoadData({ page }, false);
    }, [page, doLoadData]);

    let isBlock = false;

    const onScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop = window.scrollY;

      if (windowHeight + scrollTop > documentHeight + 30 && !isBlock) {
        isBlock = true;
        setPage(page + 1);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    });

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  };
}
