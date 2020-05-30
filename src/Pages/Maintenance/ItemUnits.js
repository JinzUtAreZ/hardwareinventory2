import React, { useState, Fragment } from 'react';
import CustomTables from '../../Elements/Tables/CustomTables';
import InputField from '../../Elements/Input/InputField';
import { Validators } from '../../Elements/Input/Validator';
import CardContext from '../../Card/CardContext';

const rows = [];
const headCells = [];

export function FormContext() {
  //const [load, setLoad] = useState(false);
  const [txtInput, setTxtInput] = useState({});

  const handleChange = (key) => (value) => {
    setTxtInput({ ...txtInput, [key]: value });
  };

  return (
    <Fragment>
      <InputField
        label="Input Unit of measurement here"
        value={txtInput.UnitsItem}
        name="UnitsItem"
        type="text"
        validtype="email"
        placeholder="Enter units of measurement here..."
        validators={[Validators.required]}
        onChange={handleChange('UnitsItem')}
      />

      <CustomTables
        selectRow={true}
        newPaging={true}
        //sortOrder={true}

        headCells={headCells}
        datas={rows}
        //load={load}
        searchable={true}
        searchPlaceholder="Search table data"
      />
    </Fragment>
  );
}

const ItemUnits = () => {
  return <CardContext source={'itemunits'} FormContext={FormContext} />;
};

export default ItemUnits;
