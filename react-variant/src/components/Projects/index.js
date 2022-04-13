import React from "react";
import Label from '../Label';

const Projects = () => {
  return (
    <div className="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorRight MuiPaper-elevation16"
         tabIndex="-1"
         style={{ transform: 'none', transition: 'transform 225ms cubic-bezier(0,0,0.2,1) 0ms' }}>
      <div className="MuiGrid-root jss1878 MuiGrid-container" id="modal_dialog">
        <div className="MuiGrid-root MuiGrid-container">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-5">
            <div className="MuiBox-root jss1835">
              <div className="MuiGrid-root MuiGrid-container">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                  <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined jss1838 MuiButton-outlinedPrimary MuiButton-disableElevation"
                          tabIndex="0"
                          type="button"
                          id="Close">
                    <span className="MuiButton-label">Close</span>
                    <span className="MuiTouchRipple-root">
   </span>
                  </button>
                </div>
              </div>
              <div className="MuiBox-root jss1846">
                <div className="MuiPaper-root MuiCard-root MuiPaper-elevation0 MuiPaper-rounded">
                  <div className="MuiBox-root jss1847">
                    <h5 className="MuiTypography-root MuiTypography-h5">Start Date
                      Placeholder</h5>
                  </div>
                  <div className="MuiBox-root jss1848">
                    <h1 className="MuiTypography-root MuiTypography-h1">{currentProject.name}</h1>
                  </div>
                  <div className="MuiBox-root jss1849">
                    <h5 className="MuiTypography-root MuiTypography-h5">Client Name
                      Placeholder</h5>
                  </div>
                  <div className="MuiBox-root jss1850">
                    <p className="MuiTypography-root MuiTypography-body1">Project Description
                      Placeholder</p>
                  </div>
                  <div className="MuiBox-root jss1851">
                    <h5 className="MuiTypography-root MuiTypography-h5">Technologies</h5>
                    <div className="MuiBox-root jss1852">
                      <div className="MuiChip-root jss1609 MuiChip-outlined jss1610"
                           id="Tech_1_Placeholder">
                            <span
                              className="MuiChip-label">
                           <p
                             className="MuiTypography-root MuiTypography-body1"
                             style={{ fontWeight: 600, fontSize: '14px', lineHeight: 'unset' }}>Tech 1 Placeholder</p>
                                          </span>
                      </div>
                      <div className="MuiChip-root jss1609 MuiChip-outlined jss1610"
                           id="Tech_2_Placeholder">
                          <span
                            className="MuiChip-label">
                             <p
                               className="MuiTypography-root MuiTypography-body1"
                               style={{ fontWeight: 600, fontSize: '14px', lineHeight: 'unset' }}>
                               Tech 1 Placeholder
                             </p>
                          </span>
                      </div>
                      <div className="MuiChip-root jss1609 MuiChip-outlined jss1610"
                           id="Tech_3_Placeholder">
                            <span
                              className="MuiChip-label">
                              <p
                                className="MuiTypography-root MuiTypography-body1"
                                style={{ fontWeight: 600, fontSize: '14px', lineHeight: 'unset' }}>
                                Tech 1 Placeholder
                              </p>
                            </span>
                      </div>
                    </div>
                  </div>
                  <h5 className="MuiTypography-root MuiTypography-h5">Project managed by</h5>
                  <div className="MuiBox-root jss1853">
                    <div>
                      <div className="MuiAvatar-root MuiAvatar-circle jss1545 jss1854"
                           id="avatar-21">
                        Avatar
                      </div>
                    </div>
                    <div className="MuiBox-root jss1855">
                      <p className="MuiTypography-root MuiTypography-body1">Project Manager
                        Placeholder
                        <h6
                          className="MuiTypography-root MuiTypography-subtitle1"
                          style={{
                            display: 'flex',
                            whiteSpace: 'nowrap',
                            color: 'rgb(148,147,141)'
                          }}>
                        </h6>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root jss1877 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-7">
            <div className="MuiBox-root jss1827 jss1887">
              <div className="MuiTabs-root jss1889">
                <div style={{
                  width: '99px',
                  height: '99px',
                  position: 'absolute',
                  top: '-9999px',
                  overflow: 'scroll'
                }}
                     className="MuiTabs-scrollable">
                </div>
                <div className="MuiTabs-scroller MuiTabs-scrollable" style={{ marginBottom: 0 }}>
                  <div className="MuiTabs-flexContainer" role="tablist">
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss1523 Mui-selected"
                            tabIndex="0"
                            type="button"
                            role="tab"
                            aria-selected="true"
                            id="pulse-tabteam"
                            aria-controls="pulse-tabpanel-undefined">
                      <span className="MuiTab-wrapper">Team</span>
                      <span className="MuiTouchRipple-root">
      </span>
                    </button>
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss1523"
                            tabIndex="-1"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            id="pulse-tabplanning"
                            aria-controls="pulse-tabpanel-undefined">
                      <span className="MuiTab-wrapper">Planning</span>
                      <span className="MuiTouchRipple-root">
      </span>
                    </button>
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss1523"
                            tabIndex="-1"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            id="pulse-tabpricing"
                            aria-controls="pulse-tabpanel-undefined">
                      <span className="MuiTab-wrapper">Pricing</span>
                      <span className="MuiTouchRipple-root">
      </span>
                    </button>
                  </div>
                  <span className="jss1524 jss1525 MuiTabs-indicator jss1888"
                        style={{ left: 0, width: 160 }}>
            </span>
                </div>
              </div>
              <div className="MuiBox-root jss1894" role="tabpanel" id="simple-tabpanel-team">
                <div className="MuiBox-root jss1895">
                  <div className="MuiBox-root jss1963">
                    <h5 className="MuiTypography-root MuiTypography-h5">Current Team</h5>
                  </div>
                    <div className="MuiPaper-root MuiCard-root jss1947 MuiPaper-elevation0"
                         id="17_ROLE_PLAVEHOLDER">
                      <div className="MuiBox-root jss1954">
                        <div className="MuiBox-root jss1955a" style={{ backgroundImage: 'none' }}>
                          <div className="MuiBox-root jss1956">
                            <div>
                              <div className="MuiAvatar-root MuiAvatar-circle jss1545 jss1957"
                                   id="avatar-17">
                                Avatar
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MuiBox-root jss1958">
                        <div className="MuiBox-root jss1959">
                        </div>
                        <div className="MuiBox-root jss1960">
                          <p className="MuiTypography-root MuiTypography-body1">
                            <a className="MuiTypography-root MuiLink-root jss1912 MuiLink-underlineNone MuiTypography-colorPrimary"
                               target="_blank"
                               id="name_placeholder">{employee.name}</a>
                          </p>
                        </div>
                        <div className="MuiBox-root jss1961">
                          <h6 className="MuiTypography-root MuiTypography-subtitle2">
                              <Label name="Skill yo"/>
                          </h6>
                        </div>
                      </div>
                    </div>
                  <div className="MuiBox-root jss1963">
                    <h5 className="MuiTypography-root MuiTypography-h5">needed</h5>
                  </div>

                  <div className="MuiBox-root jss1963">
                    <h5 className="MuiTypography-root MuiTypography-h5">Suggestions</h5>
                  </div>
                </div>
              </div>
              <div className="MuiBox-root jss1974 sf-hidden"
                   role="tabpanel"
                   id="simple-tabpanel-planning">
              </div>
              <div className="MuiBox-root jss1975 sf-hidden"
                   role="tabpanel"
                   id="simple-tabpanel-pricing">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
