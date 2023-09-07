import React from "react";
import "../styles/Filter.css"
import Select from 'react-select'

function Filter(props) {

    const[boxShadow, setBoxShadow] = React.useState('hsl(0, 0%, 52%)');
    const[bg, setBg] = React.useState('hsl(0, 0%, 100%)');
    const[text, setText] = React.useState('hsl(200, 15%, 8%)');
    const[hover, setHover] = React.useState('hsl(0, 0%, 95%)');

    const whiteMagnifyingGlass = `${process.env.PUBLIC_URL}/images/magnifying-glass-solid-white.svg`;
    const blackMagnifyingGlass = `${process.env.PUBLIC_URL}/images/magnifying-glass-solid-black.svg`;

    React.useEffect(() => {
        if(props.darkMode){
            setBoxShadow('hsl(200, 15%, 8%)');
            setBg('hsl(208, 23%, 22%)');
            setText('hsl(0, 0%, 100%)');
            setHover('hsl(207, 26%, 17%)');
        }
        else{
            setBoxShadow('hsl(0, 0%, 52%)');
            setBg('hsl(0, 0%, 100%)');
            setText('hsl(200, 15%, 8%)');
            setHover('hsl(0, 0%, 95%)');
        }
    },[props.darkMode]);

    return(
        <div className="Filter py-3 mt-3 mb-4">
            <div className="container d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-sm-between">
                <div className="d-flex justify-content-between align-items-center py-1 pe-4 mb-3 mb-sm-0">
                    <img src={props.darkMode ? whiteMagnifyingGlass : blackMagnifyingGlass} alt="" className="p-2 mx-3"/>
                    <input type="text" placeholder="Search for a country..." className="w-100" onChange={props.handleChange} value={props.searchInput}/>
                </div>
                <Select 
                    key={boxShadow}
                    isClearable={true}
                    isSearchable={false}
                    onChange={(choice) => props.setChoice(choice)}
                    value={props.choice}
                    placeholder="Filter by Region"
                    options={[
                        {value: 'Africa', label: 'Africa'},
                        {value: 'America', label: 'America'},
                        {value: 'Asia', label: 'Asia'},
                        {value: 'Europe', label: 'Europe'},
                        {value: 'Oceania', label: 'Oceania'},
                    ]}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: '0.375rem',
                      })}
                    styles={{
                        control: (provided, state) => ({
                            ...provided,
                            boxShadow: `0px 0px 10px -4px ${boxShadow}`,
                            background: bg,
                            border: 'none',
                            color: text,
                            cursor: "pointer",
                        }),
                        dropdownIndicator: (provided, state) => ({
                            ...provided,
                            "&:hover": {
                                color: text,
                            },
                            color: text
                        }),
                        clearIndicator: (provided, state) => ({
                            ...provided,
                            color: text,
                            "&:hover": {
                                color: text
                            }
                        }),
                        indicatorSeparator: (provided, state) => ({
                            ...provided,
                            display: 'none'
                        }),
                        placeholder: (provided, state) => ({
                            ...provided,
                            color: 'hsl(0, 0%, 52%)'
                        }),
                        menu: (provided, state) => ({
                            ...provided,
                            background: bg,
                            color: text
                        }),
                        menuList: (provided, state) => ({
                            ...provided,
                            padding: '0',
                        }),
                        singleValue: (provided, state) => ({
                            ...provided,
                            color: text
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isFocused ? hover : null,
                            color: text
                        })
                    }}
                />      
            </div>         
        </div>
    )
}
export default Filter;