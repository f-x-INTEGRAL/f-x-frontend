import React, { useEffect, useRef } from 'react';
import { Button, Input, Layout, MainTitle } from '@/components';
import { useForm } from 'react-hook-form';

import { instance } from '@/api';
import { APIErrorResponse } from '@/api';

import * as S from './styled';
import { useRouter } from 'next/router';
import axios from 'axios';

interface ReservationFormProps {
  name: string;
  phoneNumber: string;
  quantity: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationFormProps>();

  const router = useRouter();

  const onSubmit = async (props: ReservationFormProps) => {
    const { name, phoneNumber, quantity } = props;

    try {
      await axios.post(
        'https://fx.ggos3.xyz/api/form/save',
        {
          name: name,
          quantity: quantity,
          phoneNumber: phoneNumber,
          bankName: name,
        },
        {
          withCredentials: true,
        }
      );
      router.push('/form/completed');
    } catch (e: APIErrorResponse | unknown) {
      console.log(e);
    }
  };

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    scrollToSection(index);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FormWrapper>
          <S.FormContainer ref={sectionRefs[0]}>
            <MainTitle title="Reservation" />
            <S.Form>
              <S.FormTitle>이름을 입력해주세요.</S.FormTitle>
              <S.FormItems>
                <Input
                  placeholder="Type your name here..."
                  type="text"
                  error={errors.name?.message}
                  {...register('name', {
                    required: '이름을 입력해주세요.',
                    minLength: {
                      value: 2,
                      message: '이름을 2글자 이상 입력해주세요.',
                    },
                    pattern: {
                      value: /^[가-힣]+$/,
                      message: '이름은 한글로 입력해주세요.',
                    },
                  })}
                />
                <Button
                  text="OK"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleButtonClick(e, 1)
                  }
                />
              </S.FormItems>
            </S.Form>
          </S.FormContainer>
          <S.FormContainer ref={sectionRefs[1]} style={{ paddingTop: '280px' }}>
            <MainTitle title="Reservation" />
            <S.Form>
              <S.FormTitle>전화번호를 입력해주세요.</S.FormTitle>
              <S.FormItems>
                <Input
                  placeholder="Type your phone num here..."
                  type="text"
                  error={errors.phoneNumber?.message}
                  {...register('phoneNumber', {
                    required: '전화번호를 입력해주세요.',
                    minLength: {
                      value: 11,
                      message: '전화번호를 제대로 입력해주세요.',
                    },
                    pattern: {
                      value: /^\d{2,3}\d{3,4}\d{4}$/,
                      message: '전화번호는 숫자만 입력해주세요.',
                    },
                  })}
                />
                <Button
                  text="OK"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleButtonClick(e, 2)
                  }
                />
                <S.ScrollUpButton
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleButtonClick(e, 0)
                  }
                >
                  UP
                </S.ScrollUpButton>
              </S.FormItems>
            </S.Form>
          </S.FormContainer>
          <S.FormContainer
            ref={sectionRefs[2]}
            style={{ padding: '285px 0 200px 0' }}
          >
            <MainTitle title="Reservation" />
            <S.Form>
              <S.FormTitle>예매 인원을 입력해주세요.</S.FormTitle>
              <S.FormItems>
                <Input
                  placeholder="Type your quantity here..."
                  type="text"
                  error={errors.quantity?.message}
                  {...register('quantity', {
                    required: '예매 인원을 입력해주세요.',
                    minLength: {
                      value: 1,
                      message: '예매 인원을 입력해주세요.',
                    },
                    pattern: {
                      value: /^[1-9]*$/,
                      message: '예매 인원은 숫자로 입력해야합니다.',
                    },
                  })}
                />
                <Button
                  text="OK"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                />
                <S.ScrollUpButton
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleButtonClick(e, 1)
                  }
                >
                  UP
                </S.ScrollUpButton>
              </S.FormItems>
            </S.Form>
          </S.FormContainer>
        </S.FormWrapper>
      </form>
    </Layout>
  );
};

export default Form;
