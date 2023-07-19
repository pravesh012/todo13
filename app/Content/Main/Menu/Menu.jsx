import './Menu.css'
import '../../../../app/fontawesome-free-6.4.0-web/css/all.min.css'

export function MenuSide()
{
return(
        <>
        <div className='Menu-bar-wrapper'>
            <menu>
                <div>
                    <p style={{paddingTop:'9px', paddingLeft:'12px', float:'left'}}>Menu</p>
                    <i className='fa-solid fa-bars Bar'></i>
                     
                    <div className='search-wrapper'>
                        <input className = 'InputSearch' type='text' placeholder='Search'></input>
                        <i className="fa-solid fa-magnifying-glass magnifying-glass"></i> 
                    </div>
                </div>
               



                <div className='Tasks-rows-wrapper'>
                    <p>Tasks</p>
                    <div>Upcoming</div>
                    <div>Today</div>
                    <div>Calendar</div>
                    <div>Sticky Wall</div>
                    
                </div> 

                <div className='Lists-row-wrapper'>
                    <div>Personal</div>
                    <div>Work</div>
                    <div>List 1</div>
                    <div>Add new List</div>
                </div>

                <div className='Tags-wrapper'>
                    <span>Tag 1</span>
                    <span>Tag 2</span>
                    <span>+ Add Tag</span>
                </div>

                <div className='Login-settings'>
                    <div>Settings</div>
                    <div>Sign out</div>
                </div>
            </menu>
        </div>
        </>
    )
}
