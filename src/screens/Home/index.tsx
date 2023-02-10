import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import * as S from './styles'
import Image from '../../assets/img/livro.png'
import { CustomRating } from '../../components/CustomRating'
import { getLastRating, sendRating } from './services'
import { LastRatingProps } from './types'

export function Home() {
  const [value, setValue] = useState<number>(0)
  const [lastRating, setLastRating] = useState<LastRatingProps>()
  const notifySendedRating = () => toast('Avaliação enviada!')
  
  const handleSelectedStar = (stars: number) => {
    setValue(stars)
  }

  const showRating = async () => {
    await getLastRating({ setLastRating })
  }

  const handleRating = async () => {
    await sendRating({ value, setValue })
    notifySendedRating()
    showRating()
    handleSelectedStar
  }

  useEffect(() => {
    console.log(`A última avaliação foi a do Tutor: ${lastRating?.tutor} que recebeu: ${lastRating?.stars}`)
  }, [lastRating])

  return (
    <S.Container>
      <div>
        <img src={Image} alt="Livro Img" />
        <p>Como foi a ajuda do Tutor?</p>
      </div>
      <CustomRating onSelected={handleSelectedStar} evaluation={value}/>      
      
      <S.ButtonsContainer>
        <S.SkipButton>Pular</S.SkipButton>
        <S.ConfirmButton type={'submit'} disabled={value === 0} onClick={handleRating}>Confirmar</S.ConfirmButton>
      </S.ButtonsContainer>
    </S.Container>
  )
}