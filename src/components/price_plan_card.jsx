import {pricePlan} from './plans';

function PriceCard() {
    
    const access = (access) => {
        
        if (access == true) {
            return (<>
                <i className="fa-solid fa-check fa"></i>
                </>);
        }
        return (<>
            <i className="fa-solid fa-xmark fa"></i>
            </>);
    }


    return (
        <>
            <div className="price-card d-flex flex-row bg-primary">
               {
                 pricePlan.map((params, index) => {
                   return (            
                            
                       <div key={index} className={index > 0 ? "flex-items row bg-white m-3 ms-0 p-4 rounded-3" : "flex-items row bg-white m-3 p-4 rounded-3 "}>
                           
                           <div className='plan-type text-uppercase fw-bolder text-center text-body-tertiary pt-4 pb-0 pe-0'>{params.type}</div>
                           
                           <div className='plan-price fw-semibold fs-1 text-center p-2 pe-0'><span>$</span>{params.price}/{params.tenure}</div>
                           
                           <hr></hr>
                           
                           <div className='utilities p-2 ps-4 pe-0'><span>{access(params.account.access)}</span>{params.account.label}</div>
                           
                           <div className='utilities p-2 ps-4 pe-0'><span>{access(params.storage.access)}</span>{params.storage.label}</div>
                           
                           <div className='utilities p-2 ps-4 pe-0'><span>{access(params.project[0].access)}</span>{params.project[0].public}</div>  
                           
                           <div className='utilities p-2 ps-4 pe-0'><span>{access(params.project[0].access)}</span>{params.project[0].public}</div>
                           
                           <div className='utilities p-2 ps-4 pe-0'><span>{access(params.community.access)}</span>{params.community.label}</div>
                           
                           <div className={`utilities p-2 ps-4 pe-0 ${index === 0 ? "text-body-tertiary" : index === 1 ? "" : ""}`}>
                               
                               <span>{access(params.project[1].access)}</span>{params.project[1].private}
                           </div>
                           
                           <div className={`utilities p-2 ps-4 pe-0 ${index === 0 ? "text-body-tertiary" : index === 1 ? "" : ""}`}>
                               
                               <span>{access(params.support.access)}</span>{params.support.label}
                           </div>
                               
                           <div className={`utilities p-2 ps-4 pe-0 ${index === 0 ? "text-body-tertiary" : index === 1 ? "" : ""}`}>
                               
                               <span>{access(params.subdomain.access)}</span>{params.subdomain.label}
                           </div>
                           <div className={`utilities p-2 ps-4 pe-0 ${index === 0 ? "text-body-tertiary" : index === 1 ? "text-body-tertiary" : ""}`}>
                               
                               <span>{access(params.reports.access)}</span>{params.reports.label}
                           </div>

                           <button type="button" className={`btn btn-primary border rounded-pill fw-bold p-3 ${index === 0 ? "btn-1" : index === 1 ? "btn-1" : ""}`}>BUTTON</button>                    
                           
                       </div>
                       
                     );
                     
                 })}
                
            </div>
            
        </>

    )
}
export default PriceCard;