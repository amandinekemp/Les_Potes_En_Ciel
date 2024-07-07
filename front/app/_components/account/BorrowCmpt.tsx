import React from 'react';
import type { Borrow } from '@/app/_types/Borrow';
import { Card, CardBody } from 'react-bootstrap';

const BorrowCmpt = ({ borrow }: { borrow: Borrow }) => {
  return (
    <>
    <div className="col-lg-4 col-md-6 pb-4">
      <Card className="w-100">
        <CardBody>
          <div>
            <strong>ISBN:</strong> {borrow.isbn}
          </div>
          <div>
            <strong>Date de Prêt:</strong> {new Date(borrow.borrowDate).toLocaleDateString()}
          </div>
          <div>
            <strong>Date de Retour:</strong> {new Date(borrow.returnDate).toLocaleDateString()}
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default BorrowCmpt;
