import React from "react";
import "../scss/_detailsModal.scss";

export default function ShoeDetails({ selectedItem, onCloseModal }) {
  if (!selectedItem) return null;
  return (
    <div onClick={onCloseModal} className="detailsModal_overlay">
      <div className="detailsModal">
        <div className="modalHeader d-flex justify-content-between align-items-center">
          <p className="title">Shoe Details</p>
          <p onClick={onCloseModal} className="closeIcon">
            X
          </p>
        </div>
        <div className="modalBody d-flex justity-content-between align-items-center">
          <div className="image">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              width={350}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="info">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{selectedItem.name}</td>
                </tr>
                <tr>
                  <td>Series:</td>
                  <td>{selectedItem.alias}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>{selectedItem.description}</td>
                </tr>
                <tr>
                  <td>Story:</td>
                  <td>{selectedItem.shortDescription}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
