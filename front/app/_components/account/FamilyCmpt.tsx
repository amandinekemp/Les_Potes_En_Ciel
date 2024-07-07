import React from 'react';

import MemberCmpt from "@/app/_components/account/MemberCmpt";
import type {Family} from '@/app/_types/Family';
import { Card, CardBody } from 'react-bootstrap';

const FamilyCmpt = ({ family }: { family: Family }) => {
  return (
    <>
      <Card className="col-md-6">
        <CardBody>
          <div>
            <strong>Email:</strong> {family.email}
          </div>
          <div>
            <strong>Téléphone:</strong> {family.phoneNumber}
          </div>
        </CardBody>
      </Card>
      <Card className="col-md-6">
        <CardBody>
          <div>
            <strong>Adresse:</strong> {family.address}
          </div>
          <div>
            <strong>Code Postal:</strong> {family.zipCode}
          </div>
          <div>
            <strong>Ville:</strong> {family.city}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default FamilyCmpt;