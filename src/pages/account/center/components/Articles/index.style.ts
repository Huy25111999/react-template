import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    articleList: {
      ".ant-list-item:first-child": { paddingTop: "0" },
    },
    "a.listItemMetaTitle": {
      color: token.colorTextHeading,
    },
  };
});

export default useStyles;
