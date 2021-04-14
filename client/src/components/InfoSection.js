import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section``;
const Container = styled.div``;
const ColumnLeft = styled.section``;
const ColumnRight = styled.section``;


const InfoSection = () => {
    return (
        <div>
            <Section>
                <Container>
                    <ColumnLeft>
                        <h1>Heading</h1>
                        <p>PAragraph</p>
                        <p>PAragraph2</p>
                        <Button to='/homes'>label</Button>
                    </ColumnLeft>
                    <ColumnRight>
                        <img src='' alt='home' />
                    </ColumnRight>
                </Container>
            </Section>
        </div>
    )
}

export default InfoSection
