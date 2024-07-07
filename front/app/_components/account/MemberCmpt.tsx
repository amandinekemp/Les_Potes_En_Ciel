import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { format } from "date-fns";

import type {Member} from '@/app/_types/Member';

const MemberCmpt = ({ member }: { member: Member }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 pb-4">
        <Card className="w-100">
          <CardBody>
            <div>
              <strong>Membre:</strong> {member.memberType}
            </div>
            <div>
              <strong>Prénom:</strong> {member.firstName}
            </div>
            <div>
              <strong>Nom:</strong> {member.lastName}
            </div>
            <div>
              <strong>Date de Naissance:</strong> {format(new Date(member.birthDate), "dd/MM/yyyy")}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MemberCmpt;
