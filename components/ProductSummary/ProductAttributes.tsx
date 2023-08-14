import React from "react";
import { TProductAttributes } from "index";

interface Props {
  attributes: TProductAttributes;
}
export default function ProductAttributes({ attributes }: Props) {
  const { description, accessories, color, taste } = attributes;

  return (
    <section className="attributesContainer">
      <h3>About this Fluff</h3>
      <p>{description}</p>
      <div className="divider"></div>

      <table className="attributesTable">
        <thead className="attTableHead">
          <tr>
            <th colSpan={2}>Attributes</th>
          </tr>
        </thead>
        <tbody className="attTableBody">
          <tr>
            <td>Accessories</td>
            <td>{accessories}</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>{color}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{taste}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
