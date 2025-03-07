import './Main.css';
import * as Icons from '../../assets/Icons';
import zincLogo from '../../assets/zinc-logo.png';
import enamineLogo from '../../assets/enamine-logo.png';
import otherLogo from '../../assets/gdb-logo.png';
import tmap from '../../assets/tmap.png';

const options = [{

        title: zincLogo,
        text: (
            <>
                <strong>SOON TO BE ADDED.</strong> ZINC20 (10 billion molecules). A free-to-access database of commercially available molecules.
            </>
        ),
        color: 'blue'
    }, 
    {
        title:  enamineLogo,
        text: 'The REAL Enamine Database, 9.6 billion molecules of the largest enumerated database of synthetically feasible molecules.',
        color: 'orange'
    },
    {
        title: otherLogo,
        text: (
            <>
                <strong>SOON TO BE ADDED.</strong> 166.4 billion molecules of up to 17 atoms of C, N, O, S, and halogens forming the chemical universe database.
            </>
        ),
        color: 'blue'
    }
];

function Option({ title, text, color }) {
    return (
        <div className="option">
            <div className="face face1"> 
                <div className="option-btn">
                        <div className="btn-text">
                            VIEW
                            <Icons.MdOutlineKeyboardDoubleArrowRight className='icon' />
                        </div>
                    </div>  
                <div className="option-text">{text}</div>
                <div className='button-container'>
                    
                </div>
            </div>
            <div className={`face face2 ${color || ''}`}>
                    <img src={title} alt="" />
            </div>
        </div>
    );
}

function Main() {
    return (
        <div className='main'>
            <div className="cards">
              <div className="choose-title">
                <h4>CHOOSE A DATABASE TO START</h4>
                <p>These are some examples of Chelombus maps that you can try. If you have any suggestion for any other 
                    database you want to explore, let <a href="mailto:afloresep01@gmail.com">me</a> know! know!
                </p>
            </div>
            <div className="databases">
                {options.map((option, index) => (
                    <Option key={index} {...option} />
                ))}
            </div>  
            </div>
            <div className="map">
                <div className="mapBox">
                    <div className="map-text-container">
                        <h4>MAKING OF THE TMAP</h4>
                        <div className="map-text">
                            lsdkfjlsdkfjaldksjfña flksdjfñalskfj dslfkjñlfkj 
                            sdfkjfdldk dijflsdkfjldkfjgldkfjg lkdfjgldkfgj dfg lkfjg 
                             dldfksldfkjlsdfkjlkdfj dkfjlkjf
                             lsdkfjlsdkfjaldksjfña flksdjfñalskfj dslfkjñlfkj 
                            sdfkjfdldk dijflsdkfjldkfjgldkfjg lkdfjgldkfgj dfg lkfjg 
                             dldfksldfkjlsdfkjlkdfj dkfjlkjf
                        </div>
                        <div className="map-btn">
                            HOW TO USE
                        </div>
                    </div>
                    <img src={tmap} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
