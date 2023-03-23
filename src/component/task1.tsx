import { TextField } from "@mui/material";
import { ReactNode, useCallback } from "react";
import * as React from 'react';
import "../styles/task1.css"
import { useState, useEffect, useMemo } from "react";
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TablePagination from '@mui/material/TablePagination';

const Task1 = () => {
    // const [search, setSearch] = useState()
    const [totalSurveys, setTotalSurveys] = useState([])
    const [filteredSurveys, setFilteredSurveys] = useState([])
    const [count, setCount] = useState({ "total": 0, "draft": 0, "ongoing": 0, "completed": 0 })


    //[pagination code]
    // const [page, setPage] = React.useState(2);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const pageCount = Math.ceil(filteredSurveys.length / rowsPerPage);

    // const handleChangePage = (
    //     event: React.MouseEvent<HTMLButtonElement> | null,
    //     newPage: number,
    // ) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };



    const onFrameIcon1Click = useCallback(() => {
        // Please sync "Task 2" to the project
    }, []);



    // menu 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event: any) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    useEffect(() => {
        getAllForms();
    }, []);


    const getAllForms = async () => {
        const email = "muchewadarpita123@gmail.com"
        const response = await fetch(
            "http://localhost:5000/survey/" + email,
            {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
        const surveyData = await response.json();
        // console.log(surveyData);

        const arrayOfSurveys = surveyData.survey;
        await setTotalSurveys(arrayOfSurveys)
        await setFilteredSurveys(arrayOfSurveys)
        count.completed = surveyData.totalCompletedForm;
        count.draft = surveyData.totalDraftForm;
        count.ongoing = surveyData.totalOngoingForm;
        count.total = surveyData.totalForm;
        await setCount(count)

        // console.log(arrayOfSurveys)

    }

    const searchSurvey = async (e: any) => {
        var lowercase = e.target.value.toLowerCase();
        const filteredData = totalSurveys.filter((el: any) => {
            //if no input the return the original
            if (lowercase === '') {
                return el;
            }
            //return the item which contains the user input
            else {
                return el.title.toLowerCase().includes(lowercase)
            }
        })

        await setFilteredSurveys(filteredData);

    }

    const findCompleted = async () => {
        const email = "muchewadarpita123@gmail.com"

        const response = await fetch(
            "http://localhost:5000/survey/completed/" + email,
            {
                method: "GET",
                headers: {
                    "x-tenant-id": "63f72c21f9dfbe6751b887b5",
                    'content-type': 'application/json'
                }
            }
        );
        const surveyData = await response.json();
        // console.log(surveyData);

        const arrayOfSurveys = surveyData.survey;
        await setTotalSurveys(arrayOfSurveys)
        await setFilteredSurveys(arrayOfSurveys)
        count.completed = surveyData.totalCompletedForm;
        count.draft = surveyData.totalDraftForm;
        count.ongoing = surveyData.totalOngoingForm;
        count.total = surveyData.totalForm;
        await setCount(count)


    }
    const findOngoing = async () => {
        const email = "muchewadarpita123@gmail.com"

        const response = await fetch(
            "http://localhost:5000/survey/ongoing/" + email,
            {
                method: "GET",
                headers: {
                    "x-tenant-id": "63f72c21f9dfbe6751b887b5",
                    'content-type': 'application/json'
                }
            }
        );


        const surveyData = await response.json();


        const arrayOfSurveys = surveyData.survey;
        // console.log(arrayOfSurveys+"jhvbjhbbbbbbbbbbbb");
        console.log(arrayOfSurveys);
        await setTotalSurveys(arrayOfSurveys)
        await setFilteredSurveys(arrayOfSurveys)
        count.completed = surveyData.totalCompletedForm;
        count.draft = surveyData.totalDraftForm;
        count.ongoing = surveyData.totalOngoingForm;
        count.total = surveyData.totalForm;
        await setCount(count)

    }
    const findDraft = async () => {
        const email = "muchewadarpita123@gmail.com"

        const response = await fetch(
            "http://localhost:5000/survey/draft/" + email,
            {
                method: "GET",
                headers: {
                    "x-tenant-id": "63f72c21f9dfbe6751b887b5",
                    'content-type': 'application/json'
                }
            }
        );


        const surveyData = await response.json();


        const arrayOfSurveys = surveyData.survey;
        console.log(arrayOfSurveys);
        await setTotalSurveys(arrayOfSurveys)
        await setFilteredSurveys(arrayOfSurveys)
        count.completed = surveyData.totalCompletedForm;
        count.draft = surveyData.totalDraftForm;
        count.ongoing = surveyData.totalOngoingForm;
        count.total = surveyData.totalForm;
        await setCount(count)

    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const filters = [
        'None',
        'A-Z',
        'Z-A'
    ];


    const options = [
        'Reports',
        'Edit',
        'View Details',
        'Clone'

    ];

    const ITEM_HEIGHT = 48;

    async function sortAlpha(condition: string) {

        var sortedArray = filteredSurveys;
        if (condition === 'A-Z') {
            sortedArray = filteredSurveys.sort(function (a: any, b: any) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        }
        else if (condition === 'Z-A') {
            sortedArray = filteredSurveys.sort(function (a: any, b: any) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return 1;
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1;
                }
                return 0;
            });

        }
        else {
            sortedArray = totalSurveys;
        }
        await setFilteredSurveys(sortedArray)
        { handleClose2() }

    }

    return (
        <div className="task-1">
            <div className="survey-table">
                <div className="frame-parent">
                    <div className="welcome-back-anna-parent">
                        <b className="welcome-back-anna">{count.total}</b>
                        <div className="youve-learned-80">Total Surveys</div>
                        <div className="youve-learned-801">View All</div>
                        <div className="iconsfact-check-black-24dp-wrapper">
                            <img
                                onClick={getAllForms}
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/iconsfact-check-black-24dp.svg"
                            />
                        </div>
                    </div>
                    <div className="welcome-back-anna-group">
                        <b className="welcome-back-anna">{count.ongoing}</b>
                        <div className="youve-learned-802">Ongoing Surveys</div>
                        <div className="youve-learned-803" onClick={findOngoing}>View All</div>
                        <div className="timely-access-to-care-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/timely-access-to-care.svg"
                            />
                        </div>
                    </div>
                    <div className="welcome-back-anna-parent">
                        <b className="welcome-back-anna">{count.draft}</b>
                        <div className="youve-learned-80">Draft Surveys</div>
                        <div className="youve-learned-803" onClick={findDraft}>View All</div>
                        <div className="iconsfact-check-black-24dp-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/reschedule.svg"
                            />
                        </div>
                    </div>
                    <div className="welcome-back-anna-parent">
                        <b className="welcome-back-anna">{count.completed}</b>
                        <div className="youve-learned-80">Completed Surveys</div>
                        <div className="youve-learned-803" onClick={findCompleted}>View All</div>
                        <div className="iconsfact-check-black-24dp-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/iconscheck-circle-black-24dp.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="frame-group">
                    <div className="frame-container">
                        <div className="welcome-back-anna-parent1">
                            <b className="welcome-back-anna4">Surveys ({totalSurveys.length})</b>
                            <div className="frame-parent1">
                                <div className="frame-wrapper">
                                    <div className="iconssearch-black-24dp-1-parent">
                                        <img
                                            className="iconsfact-check-black-24dp"
                                            alt=""
                                            src="/iconssearch-black-24dp-1.svg"
                                        />
                                        <input onChange={searchSurvey} className="input" placeholder="Search by Survey Name" defaultValue="" />
                                    </div>
                                </div>
                                <div className="frame-parent2">
                                    <img className="frame-child" alt="" src="/frame-27323.svg" />
                                    <img
                                        className="frame-item"
                                        alt=""
                                        src="/frame-27329.svg"
                                        onClick={onFrameIcon1Click}
                                    />
                                    {/* <InputLabel></InputLabel> */}

                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick2}
                                    >
                                        <img alt="" src="/frame-27330.svg" />
                                    </IconButton>
                                    <Menu
                                        id="long-menu-2"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl2}
                                        open={open2}
                                        onClose={handleClose2}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        {filters.map((filter) => (
                                            <MenuItem key={filter} selected={filter === 'None'} onClick={() => sortAlpha(filter)}>
                                                {filter}
                                            </MenuItem>
                                        ))}

                                    </Menu>

                                </div>
                            </div>
                        </div>
                        <div className="block-parent">
                            <div className="block">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Survey Name</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                        <div className="cellheadermaster-child" />
                                    </div>
                                </div>
                            </div>

                            <div className="block1">
                                <div className="header1">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Created By</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort1.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="block2">
                                <div className="header1">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Status</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort2.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block3">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">No of Questions</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort3.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="block3">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Created On</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort4.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="block3">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Expiry On</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort5.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            filteredSurveys.map(
                                (survey: any) => {
                                    return (<div className="block-parent " key={survey._id}>
                                        <div className="block">
                                            <div className="table-row-cells">
                                                <div className="contentbox">
                                                    <div className="container1">
                                                        <div className="input">{survey.title} </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block2">
                                            <div className="table-row-cells1">
                                                <div className="contentbox1">
                                                    <div className="container14">
                                                        <div className="profilecircleinitial">
                                                            <div className="aa">{(survey.creator).slice(0, 1).toUpperCase()}</div>
                                                        </div>
                                                        <div className="data">
                                                            <div className="input">{survey.creator}</div>
                                                            <div className="sublabel-wrapper">
                                                                <div className="sublabel">SSEDL0004</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block3">
                                            <div className="table-row-cells24">
                                                <div className="contentbox">
                                                    <div className="container1">
                                                        <div className={survey.status}>
                                                            <div className="label">{survey.status}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block3">
                                            <div className="table-row-cells1">
                                                <div className="contentbox">
                                                    <div className="container1">
                                                        <div className="input">{survey.form.length}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block3">
                                            <div className="table-row-cells1">
                                                <div className="contentbox">
                                                    <div className="container1">
                                                        <div className="input">{new Date(survey.createdAt).getDate()}&nbsp;{monthNames[new Date(survey.createdAt).getMonth()]}&nbsp;{new Date(survey.createdAt).getFullYear()}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block3">
                                            <div className="table-row-cells1">
                                                <div className="contentbox1">
                                                    <div className="container14">
                                                        <div className="input">{new Date(survey.expiry).getDate()}&nbsp;{monthNames[new Date(survey.expiry).getMonth()]}&nbsp;{new Date(survey.expiry).getFullYear()}</div>
                                                        <img className="accountcircle-icon" alt="" />
                                                        <img className="accountcircle-icon" alt="" />
                                                        <div className="task-icon">
                                                            <IconButton
                                                                aria-label="more"
                                                                id="long-button"
                                                                aria-controls={open ? 'long-menu' : undefined}
                                                                aria-expanded={open ? 'true' : undefined}
                                                                aria-haspopup="true"
                                                                onClick={handleClick}
                                                            >
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                            <Menu
                                                                id="long-menu"
                                                                MenuListProps={{
                                                                    'aria-labelledby': 'long-button',
                                                                }}
                                                                anchorEl={anchorEl}
                                                                open={open}
                                                                onClose={handleClose}
                                                                PaperProps={{
                                                                    style: {
                                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                                        width: '20ch',
                                                                    },
                                                                }}
                                                            >
                                                                {options.map((option) => (
                                                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            )
                        }

                    </div>


                </div>

            </div>
            {/* <TablePagination
                // component=""

                count={10}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}

            /> */}


        </div >
    );
};

export default Task1;
