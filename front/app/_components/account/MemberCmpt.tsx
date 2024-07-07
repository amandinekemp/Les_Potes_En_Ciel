import React from 'react';

import type {Member} from '@/app/_types/Member';

const MemberCmpt = ({ member }: { member: Member }) => {
  return (
    <>
      <div className="info-item">
        <strong>ID du Membre:</strong> {member.idMember}
      </div>
      <div className="info-item">
        <strong>Type de Membre:</strong> {member.memberType}
      </div>
      <div className="info-item">
        <strong>Prénom:</strong> {member.firstName}
      </div>
      <div className="info-item">
        <strong>Nom:</strong> {member.lastName}
      </div>
      <div className="info-item">
        <strong>Date de Naissance:</strong> {new Date(member.birthDate).toLocaleDateString()}
      </div>
    </>
  );
};

export default MemberCmpt;
