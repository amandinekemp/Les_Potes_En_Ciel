import React from 'react';
import type { Borrow } from '@/app/_types/Borrow';

const BorrowCmpt = ({ borrow }: { borrow: Borrow }) => {
  return (
    <>
      <div className="info-item">
        <strong>ID de Prêt:</strong> {borrow.idBorrow}
      </div>
      <div className="info-item">
        <strong>ISBN:</strong> {borrow.isbn}
      </div>
      <div className="info-item">
        <strong>ID de la Famille:</strong> {borrow.idFamily}
      </div>
      <div className="info-item">
        <strong>Date de Prêt:</strong> {new Date(borrow.borrowDate).toLocaleDateString()}
      </div>
      <div className="info-item">
        <strong>Date de Retour:</strong> {new Date(borrow.returnDate).toLocaleDateString()}
      </div>
    </>
  );
};

export default BorrowCmpt;
