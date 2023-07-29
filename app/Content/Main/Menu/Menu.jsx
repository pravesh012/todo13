
import './Menu.css'

export default function MenuSide()
{
return(
        <>
        <div className='Menu-bar-wrapper'>
                <div className='parent-menu-bar'>
                    <p className = 'menu-p'>Menu</p>
                    <i className='fa-solid fa-bars Bar'></i>
                </div>
                     
                <div className='search-wrapper'>
                        <i className="fa-solid fa-magnifying-glass magnifying-glass"></i> 
                        <input className = 'InputSearch' type='text' placeholder='Search'></input>
                        
                </div>

               


{/* inline blocks have space in-between to have 0 space you need to layer it like this below. */}
                <div className='Tasks-rows-wrapper'>
                    <p>TASKS</p>
                    
                    <i className="fa-solid fa-angles-right"></i><span>Upcoming</span>

                    <i className="fa-solid fa-list-check"></i><span>Today</span>

                    <i className="fa-solid fa-calendar-days"></i><span>Calendar</span>

                    <i className="fa-solid fa-note-sticky"></i><span>Sticky Wall</span>
                    
                </div> 

                <div className='Tasks-rows-wrapper'>
                    <p>LISTS</p>

                    <i className="Lists-Square Personal"></i><span>Personal</span>

                    <i className="Lists-Square Work"></i><span>Work</span>

                    <i className="Lists-Square LISTS-I" ></i><span>List 1</span>

                    <i className="fa-solid fa-plus"></i><span>Add new List</span>
                </div>

                <div className='Tags-wrapper'>
                    <p>TAGS</p>
                    <div className='Tags-wrapper-span'><span>Tag 1</span><span>Tag 2</span><span> + Add Tag</span></div>
                </div>

                <div className='Login-settings'>
                    <div>Settings</div>
                    <div>Sign out</div>
                </div>

        </div>
        </>
    )
}
