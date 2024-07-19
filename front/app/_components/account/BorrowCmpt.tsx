import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { format } from "date-fns";

import type { Borrow } from '@/app/_types/Borrow';

/** Component to display borrow details with ISBN, borrow date, and return date **/

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
            <strong>Date de Prêt:</strong> {format(new Date(borrow.borrowDate), "dd/MM/yyyy")}
          </div>
          <div>
            <strong>Date de Retour:</strong> {borrow.returnDate && format(new Date(borrow.returnDate), "dd/MM/yyyy")}
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default BorrowCmpt;
