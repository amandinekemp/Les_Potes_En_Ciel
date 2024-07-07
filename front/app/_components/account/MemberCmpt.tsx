import React from 'react';

import type {Member} from '@/app/_types/Member';
import { Card, CardBody } from 'react-bootstrap';

const MemberCmpt = ({ member }: { member: Member }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 pb-4">
        <Card className="w-100">
          <CardBody>
            <div>
              <strong>Type de Membre:</strong> {member.memberType}
            </div>
            <div>
              <strong>Prénom:</strong> {member.firstName}
            </div>
            <div>
              <strong>Nom:</strong> {member.lastName}
            </div>
            <div>
              <strong>Date de Naissance:</strong> {new Date(member.birthDate).toLocaleDateString()}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MemberCmpt;
