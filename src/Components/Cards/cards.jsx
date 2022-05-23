import {motion,useMotionValue,useTransform,useViewportScroll} from "framer-motion";
import { useEffect } from "react";



const SingleCard = (props) => {
    //this will track the location of the elements postion
    const x = useMotionValue(0) 
    const y = useMotionValue(0);
    //first array defines amount of movement to track, second is the opacity value
    const opacity = useTransform(x, [100, 0, -100], [0, 1, 1]) 
    var scale = ''
    // function onMountSetScaleYTransform(){
    //     scale = useTransform(y, [100, 0, -100], [0.2, props.scale, 1.0]);
    // }
    scale = useTransform(y, [100, 0, -100], [0.1, .5, 1.0]);
    useEffect( () => {
        //scale = useTransform(y, [100, 0, -100], [0.2, props.scale, 1.0]);
    },[])
    


    return(
        <motion.div
        drag = {true}
        initial = {{y: -1000}}
        dragConstraints={{left: -90, right: 90,top: -100, bottom: 100}}
        animate={{ x: props.animateX, y: props.animateY,scale:props.scale, rotate: 360 }} 
        transition={{duration: 2}}
        className="modal"
        whileTap={{backgroundColor: props.bgColorSecondary, /*scale: 1.1*/}}
        // whileHover={{ scale: 1.1 }}
        style={
            {
                maxWidth: '150px', height: '250px',
                backgroundColor: props.bgColor,
                x,opacity,
                y,scale,
            }
        }
        >

        </motion.div>
    )
}

const CardContainer = (props) => {

    var singleCardInfo = {
        cardOne: {
            animate: {
                x: 0,
                y: 0 /* was 100 */
            },
            scale: 0.5 /*was 7 */,
            bgColor: '#fb8500',
            bgColorSecondary: '#f72585'
        },
        cardTwo: {
            animate: {
                x: 0,
                y: 0 /* was 120 */
            },
            scale: 0.5,
            bgColor: '#023047',
            bgColorSecondary: '#560bad'
        },
        cardThree: {
            animate: {
                x: 0,
                y: 0 /* was 150 */
            },
            scale: 0.5 /*was 2 */,
            bgColor: '#8ecae6',
            bgColorSecondary: '#4895ef'
        }
    }

    return(
        <motion.div 
        style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',border: '5px solid red'}}
        >
            {[singleCardInfo.cardOne,singleCardInfo.cardTwo,singleCardInfo.cardThree]
            .map( (CardInfoObj,index) => 

                <SingleCard 
                bgColor={CardInfoObj.bgColor} bgColorSecondary={CardInfoObj.bgColorSecondary} key={index} animateY={CardInfoObj.animate.y} scale={CardInfoObj.scale}
                />

            )}
        </motion.div>
    )
}

export {CardContainer}