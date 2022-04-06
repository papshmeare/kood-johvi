import React from "react";

const Label = ({ name }) => (
  <div className="MuiChip-root jss1609 MuiChip-outlined jss1610">
    <span className="MuiChip-label">
          <p className="MuiTypography-root MuiTypography-body1"
             style={{ fontWeight: 600, fontSize: '14px', lineHeight: 'unset' }}>
            {name}
        </p>
      </span>
  </div>
);
export default Label;
