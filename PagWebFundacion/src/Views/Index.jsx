import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Logo } from '../Components/Logo'
import { imageSlider1 } from '../data/imageSlider'
import Slider from '../Components/Slider'

function Index() {

return (
    <div className='containerIndex'>
        <Nav/>
        <section>
            <img src="Mancha_2_Section_1.png" alt="Mancha" className='mancha'/>
            <img src="Mancha_1_Section_1.png" alt="Mancha" className='mancha'/>

            <div className='containerBienvenida'>
                <div>
                    <div className='cir'></div>
                    <h1>Fundación Conciencia <br /> por la <span>Vida</span></h1>
                    <div>
                        <p>Reconstruyendo esperanzas ante el 0+</p>
                        <button>CONTÁCTANOS</button>
                        <div className='containerFlecha'>
                            <svg version="1.1" viewBox="0 0 2048 2048" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                                <path transform="translate(956)" d="m0 0h144v1l61 7 41 6 45 9 48 12 28 8 33 11 26 9 30 12 30 13 30 14 32 16 24 14 25 14 23 15 16 10 20 14 17 12 21 16 25 20 13 11 14 12 13 12 12 11 7 7 8 7 14 14 7 8 14 14 7 8 10 11 9 11 9 10 11 14 13 16 14 19 13 18 11 16 13 20 14 22 10 17 9 16 12 22 14 27 13 28 13 30 15 39 10 29 9 28 10 36 8 33 10 50 6 40 6 54h2v159l-2 1-6 56-6 40-7 37-8 35-12 44-8 25-9 27-14 37-14 33-11 24-13 27-10 19-14 25-10 17-10 16-14 22-8 12-12 17-13 18-9 12-13 16-10 13-13 15-12 14-11 12-3 4h-2l-2 4-18 18-1 2h-2l-2 4-15 14-11 11-8 7-13 12-8 7-13 11-17 14-13 10-17 13-18 13-20 14-17 11-16 10-18 11-28 16-24 13-16 8-21 10-15 7-25 11-36 14-37 13-43 13-48 12-38 8-36 6-45 6-39 4-6 1h-140v-1l-22-3-50-6-47-8-38-8-43-11-37-11-35-12-36-14-31-13-30-14-34-17-22-12-27-16-24-15-27-18-18-13-14-10-26-20-16-13-2-1v-2l-4-2-11-10-11-9-15-14-17-16-33-33-7-8-8-8-9-11-11-12-9-11-14-17-20-26-24-34-10-15-14-22-15-25-13-23-12-22-13-26-16-36-10-23-14-37-12-35-9-30-11-42-9-41-7-41-4-28-6-56-1-1v-144l1-2 7-63 6-39 9-46 14-56 13-42 15-43 13-32 15-34 16-33 8-15 8-16 12-21 17-28 16-25 13-18 14-20 9-12 14-18 13-16 9-11 9-10 7-9h2l2-4 15-16 7-8h2l2-4 26-26h2v-2l8-7 9-9 8-7 10-9 11-9 10-9 17-13 16-13 36-26 33-22 19-12 29-17 22-12 35-18 28-13 36-15 34-13 35-12 37-11 52-13 35-7 43-7 40-5zm25 129-43 3-43 5-41 7-28 6-40 10-34 10-40 14-30 12-30 13-35 17-19 10-23 13-17 10-34 22-34 24-16 13-16 12-10 9-11 9-12 11-8 7-9 8v2l-4 2-27 27-7 8-10 10-9 11-10 11-9 11-13 16-10 13-14 19-11 16-10 15-11 17-9 15-15 26-12 23-10 19-16 35-14 35-13 36-10 32-8 29-10 44-7 39-4 29-3 25-3 46v79l3 44 5 42 7 43 9 41 8 31 11 36 13 37 14 35 15 33 8 17 10 19 9 17 14 24 13 21 18 27 20 28 10 13 13 16 8 10 13 15 9 10 7 8 9 9 7 8 23 23 8 7 8 8 11 9 13 12 11 9 16 13 20 15 18 13 19 13 25 16 15 9 28 16 23 12 24 12 20 9 24 10 34 13 35 12 42 12 43 10 45 8 38 5 49 4 22 1h58l36-2 32-3 39-5 35-6 45-10 49-14 50-17 27-11 32-14 33-16 22-12 25-14 23-14 27-18 20-14 16-12 14-11 16-13 13-11 11-10 8-7 10-9 9-9 8-7 14-14 7-8 9-9 14-16v-2h2l9-11 11-13 22-28 24-34 15-23 13-21 16-28 15-29 11-22 15-34 17-44 14-43 10-36 9-39 8-44 6-46 3-40 1-27v-53l-2-39-3-33-6-44-8-43-10-42-9-31-12-37-10-27-14-34-15-33-10-19-13-25-10-17-12-20-16-25-14-20-13-18-10-13-11-14-9-11-12-14-13-15-8-8-7-8-38-38-8-7-10-9-8-7-14-12-14-11-15-12-17-12-18-13-15-10-22-14-22-13-21-12-33-17-25-12-33-14-26-10-47-16-43-12-40-9-38-7-38-5-31-3-34-2z"/>
                                <path transform="translate(1519,709)" d="m0 0h9l13 2 12 5 11 7 6 5 8 10 7 14 3 12v20l-4 14-7 13-11 13-492 492h-2l-2 4-12 9-13 6-17 4h-8l-15-3-12-5-11-8-8-7-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-6-7-6-5-7-8-9-13-4-10-2-8-1-12 2-14 5-15 10-14 10-9 10-6 12-4 5-1h22l14 4 11 6 13 11 449 449 5-1 455-455 14-9 10-4z"/>
                                <path transform="translate(0,1097)" d="m0 0"/>
                            </svg>
                        </div>
                        <p>Desliza para obtener más información</p>
                    </div>
                </div>
                <div>
                    <Logo Widthx={"600px"} Heighty={"600px"}/>
                </div>
            </div>
        </section>
        <section>
            <img src="Mancha_1_Section_2.png" alt="Mancha" className='mancha1'/>
            <div className='containerV'>
                <h2><span>Visión</span> de la  <br /> Organización</h2>
                <p>
                Tiene como visión convertirse en una Organización NO Gubernamental líder para la Defensa de los Derechos de las personas que padecen de VIH/SIDA y otras infecciones de transmisión sexual; a través de estrategias y herramientas necesarias para enfrentar las implicaciones del VIH/SIDA.
                <br />
                <br />
                El mejoramiento de la calidad de vida a través de la educación, prevención, asistencia médica y atención psicológica, con la participación de los actores a todo nivel, organizaciones públicas o privadas, naturales o júridicas organizaciones no gubernamentales, asociaciones afines y comunitarias en general.
                </p>
            </div>

            <div className='containerS1'>
                <div className='lateralSlider'>
                    <Slider>
                        {imageSlider1.map((image, index) => {
                            return (
                            <>
                            <img key={index} src={image.url} alt={image.alt}/>
                            <p>{image.description}</p>
                            </>
                        );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
        <section>
            <div className='containerS2'>
                <div className='lateralSlider'>
                    <Slider>
                        {imageSlider1.map((image, index) => {
                            return (
                            <>
                            <img key={index} src={image.url} alt={image.alt}/>
                            <p>{image.description}</p>
                            </>
                        );
                        })}
                    </Slider>
                </div>
            </div>

            <div>
                <h2><span>Misión</span> de la <br /> Organización</h2>
                <ol>
                    <li>Mejorar la calidad de vida de las personas, tanto infectados como saludables, mediante proyectos y estrategias que logren la prevención y control de la epidemia del SIDA/VIH.</li>
                    <br />
                    <li>Impulsar la salud sexual, para disminuir la transmisión de SIDA/VIH y otras infecciones sexuales.</li>
                    <br />
                    <li> Respetar sus derechos a través de una sensibilización a las personas, que resulte en el aumento del nivel de compromiso y conciencia sobre el valor de la no discriminación y respeto por la igualda de los seres humanos y los afectados de sida.</li>
                </ol>
            </div>
            <img src="Mancha_2_Section_3.png" alt="Mancha" className='mancha2'/>
        </section>
        <Footer/>
    </div>
)
}

export default Index