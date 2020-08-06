import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, Header, Footer } from './styles';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConecction = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id,
    });
  }, [teacher]);
  return (
    <Container>
      <article>
        <Header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </Header>

        <p>{teacher.bio}</p>

        <Footer>
          <p>
            Preço/hora
            <strong>R$ {teacher.cost}</strong>
          </p>

          <a
            onClick={createNewConecction}
            href={`https://wa.me/${teacher.whatsapp}`}
            target="_blank"
          >
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </a>
        </Footer>
      </article>
    </Container>
  );
};

export default TeacherItem;
