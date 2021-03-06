import React from 'react'

import Halmet from '../components/Halmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import { SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'


const Home = () => {
  return (
    <Halmet title='Trang Chủ'>
      {/* Home hero slider */}
        <HeroSlider
          data={heroSliderData}
          control={true}
          auto={true}
          timeOut={5000}
        />
      {/*End hero slider */}

      {/* policy section */}
        <Section>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >

            {
              policy.map((item, index) => <Link  key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link> )
            }

            </Grid>
          </SectionBody>
        </Section>
      {/* end policy section */}

      {/* best selling section */}
        <Section>
          <SectionTitle>
            Top Sản Phẩm Trong Tuần
          </SectionTitle> 
            
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
            </Grid> 
          </SectionBody>
        </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
          <SectionTitle>
            Sản Phẩm Mới
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
            {
              productData.getProducts(12).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
            </Grid> 
          </SectionBody>
        </Section>
      {/* end new arrival section */}


      {/* banner */}
        <Section>
          <SectionBody>
            <Link to="/catalog">
              <img src={banner} alt="" />
            </Link>
          </SectionBody>
        </Section>
      {/* end banner */}

      {/* popular product section */}
        <Section>
          <SectionTitle>
            Phổ Biến
          </SectionTitle>

          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
            {
              productData.getProducts(8).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
            </Grid> 
          </SectionBody>
        </Section>
      {/* end popular product section */}

    </Halmet>
  )
}

export default Home