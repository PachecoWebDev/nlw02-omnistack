import React from 'react';

import PageHeader from '../../components/PageHeader';
import Teacheritem from '../../components/TeacherItem';
import { Container, InputBlock } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <InputBlock>
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </InputBlock>
        </form>
      </PageHeader>

      <Teacheritem />
      <Teacheritem />
      <Teacheritem />
      <Teacheritem />
    </Container>
  );
};

export default TeacherList;
