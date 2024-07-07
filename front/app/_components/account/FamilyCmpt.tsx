import React from 'react';

import MemberCmpt from "@/app/_components/account/MemberCmpt";
import type {Family} from '@/app/_types/Family';

const FamilyCmpt = ({ family }: { family: Family }) => {
  return (
    <>
      <div className="col-6">
        <div className="info-item">
          <strong>ID de la Famille:</strong> {family.idFamily}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {family.email}
        </div>
        <div className="info-item">
          <strong>Numéro de Téléphone:</strong> {family.phoneNumber}
        </div>
      </div>
      <div className="col-6">
        <div className="info-item">
          <strong>Adresse:</strong> {family.address}
        </div>
        <div className="info-item">
          <strong>Code Postal:</strong> {family.zipCode}
        </div>
        <div className="info-item">
          <strong>Ville:</strong> {family.city}
        </div>
      </div>
    </>
  );
};

export default FamilyCmpt;
