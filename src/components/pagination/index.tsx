import { Meta } from '@interfaces';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Container } from './style';

interface PaginationPageProps {
  handlePageChange: (fistpage: number) => void;
  currentPage: number;
  dataPage: { meta: Meta };
}

export const PaginationPage: React.FC<PaginationPageProps> = ({
  handlePageChange,
  currentPage,
  dataPage,
}) => {
  return (
    <>
      <Container>
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
          {[...Array(dataPage.meta.pagination.pageCount)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
          <Pagination.Last
            onClick={() => handlePageChange(dataPage.meta.pagination.pageCount)}
          />
        </Pagination>
      </Container>
    </>
  );
};
