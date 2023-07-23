const { default: styled } = require('@emotion/styled');

export const TransationTable = styled.table`
  margin-top: 50px;
  width: 30%;
  border: 1px solid #eee;
  table-layout: fixed;
  margin-bottom: 20px;
`;

export const TransationTableHeader = styled.thead``;

export const TransationTableTr = styled.tr``;

export const TransationTableTh = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
`;

export const TransationTableTd = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
`;

export const TransationTableBody = styled.tbody``;
