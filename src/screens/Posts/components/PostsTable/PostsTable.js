import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import {
  PostsTableContainer,
  StyledTableHeaderCell,
  StyledTable,
  StyledTableRowCell,
} from "./styles";

export default function PostsTable({ posts, loading }) {
  return (
    <PostsTableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableHeaderCell>Título</StyledTableHeaderCell>
            <StyledTableHeaderCell>Conteúdo</StyledTableHeaderCell>
            <StyledTableHeaderCell>Autor</StyledTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <StyledTableRowCell>{post.title}</StyledTableRowCell>
              <StyledTableRowCell>{post.body}</StyledTableRowCell>
              <StyledTableRowCell>{post.userId}</StyledTableRowCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </PostsTableContainer>
  );
}
