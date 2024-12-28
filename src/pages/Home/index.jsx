import { api } from '../../services/api';
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content, SwiperStyles } from "./styles";
import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { Food } from "../../components/Food";
import { Footer } from '../../components/Footer';
import bannerMobile from "../../assets/banner-mobile.png";
import bannerHome from "../../assets/banner-home.png";

//importação para utilização do swiper para criar o slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Home({ isAdmin }) {
  //define uma condição de tamanho de tela para aplicar diretamente nas propriedades
  const desktopScreen = useMediaQuery({ minWidth: 1024 });

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [dishes, setDishes] = useState({
    meals: [], desserts: [], beverages: [] 
  });
  const [searchTerm, setSearch] = useState("");
  const navigate = useNavigate();

  //refer~encia para cada slider
  const swiperMeals = useRef(null);
  const swiperDesserts = useRef(null);
  const swiperBeverages = useRef(null);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?searchTerm=${searchTerm}`);

      //filtra as categorias dos pratos buscados
      const meals = response.data.filter(dish => dish.category === "meal");
      const desserts = response.data.filter(dish => dish.category === "dessert");
      const beverages = response.data.filter(dish => dish.category === "beverage");

      setDishes({ meals, desserts, beverages });
    }

    fetchDishes();
  }, [searchTerm]);

  function handleDishDetails(id) {
    navigate(`/dish/${id}`);
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: .5,
    };

    const swiperObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        const swiper = entry.target.swiper; 
        if (swiper && swiper.autoplay) {
          if (entry.isIntersecting) { 
            swiper.autoplay.start(); 
          } else { 
            swiper.autoplay.stop(); 
          } 
        }  
      });
    }, observerOptions);

    if (swiperMeals.current) {
      swiperObserver.observe(swiperMeals.current); 
    }

    if (swiperDesserts.current) {
      swiperObserver.observe(swiperDesserts.current); 
    }

    if (swiperBeverages.current) {
      swiperObserver.observe(swiperBeverages.current)
    }

    return () => {
      swiperObserver.disconnect();
    }
  }, []);


  return (
    <Container>
      {!desktopScreen && 
        <Menu 
          isAdmin={isAdmin} 
          isMenuOpen={isMenuActive} 
          setIsMenuOpen={setIsMenuActive} 
          setSearch={setSearch}
        />
      }

      <Header 
        isAdmin={isAdmin} 
        isMenuOpen={isMenuActive} 
        setIsMenuOpen={setIsMenuActive} 
        setSearch={setSearch}
      />

      <main>
        <div>
          <header>
            <img 
              src={desktopScreen ? bannerHome : bannerMobile} 
              alt="Macarons coloridos ao lado de frutas." 
            />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>

          <Content>
            <InputField title="Refeições">
            <SwiperStyles>
              <Swiper className="swiper"
                ref={swiperMeals}
                spaceBetween={desktopScreen ? 27 : 16}
                slidesPerView="auto"
                loop={true}
                grabCursor={true}
                navigation={desktopScreen}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false, //autoplay não será interrompido após a interação
                }}
                
              >

                {
                  dishes.meals.map(dish => (
                    <SwiperSlide
                    className="swiper-slide"
                    key={String(dish.id)}>
                      <Food 
                        $isAdmin={isAdmin}
                        data={dish}
                        handleDetails={handleDishDetails}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              </SwiperStyles>
            </InputField>

            <InputField title="Sobremesas">
            <SwiperStyles>
              <Swiper className="swiper"
                ref={swiperDesserts}
                spaceBetween={desktopScreen ? 27 : 16}
                slidesPerView="auto"
                loop={true}
                grabCursor={true}
                navigation={desktopScreen}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {
                  dishes.desserts.map(dish => (
                    <SwiperSlide
                    className="swiper-slide"
                    key={String(dish.id)}>

                      <Food 
                        $isAdmin={isAdmin}
                        data={dish}
                        handleDetails={handleDishDetails}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </SwiperStyles>
            </InputField>

            <InputField title="Bebidas">
            <SwiperStyles>
              <Swiper className="swiper"
                ref={swiperBeverages}
                spaceBetween={desktopScreen ? 27 : 16}
                slidesPerView="auto"
                loop={true}
                grabCursor={true}
                navigation={desktopScreen}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {
                  dishes.beverages.map(dish => (
                    <SwiperSlide className="swiper-slide"
                    key={String(dish.id)}>

                      <Food 
                        $isAdmin={isAdmin}
                        data={dish} 
                        handleDetails={handleDishDetails}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </SwiperStyles>
            </InputField>
          </Content>
        </div>
      </main>

      <Footer />
    </Container>
  );
}