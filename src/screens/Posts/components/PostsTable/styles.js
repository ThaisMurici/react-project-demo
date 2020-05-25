import styled from "styled-components";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export const PostsTableContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};

  overflow: scroll;
`;

export const StyledTable = styled(Table).attrs({
  stickyHeader: true,
})`
  border: 1px solid ${(props) => props.theme.separator};
`;

export const StyledTableHeaderCell = styled(TableCell)`
  background-color: ${(props) => props.theme.secondary};
  border-top: 1px solid ${(props) => props.theme.separator};
  border-left: 1px solid ${(props) => props.theme.separator};
  border-right: 1px solid ${(props) => props.theme.separator};

  color: ${(props) => props.theme.tableHeaderText};

  &:first-child {
    border-right: none;
  }

  &:last-child {
    border-right: none;
    border-left: none;
  }
`;

export const StyledTableRowCell = styled(TableCell)`
  border-left: 1px solid ${(props) => props.theme.separator};
  border-right: 1px solid ${(props) => props.theme.separator};

  &:first-child {
    border-right: none;
  }

  &:last-child {
    border-right: none;
    border-left: none;
  }
`;
