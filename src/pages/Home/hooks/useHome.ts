import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import CarService from '../../../core/services/carService.ts';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface carModel {
  id: number;
  name: string;
  base64: string;
}

export interface Inputs {
  name: string;
  imageFile: string;
}

export const useHome = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [page, setPage] = useState(1);
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false)
  const [alertModal, setAlertModal] = useState<boolean>(false)
  const { data: cardList, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['cars'],
    queryFn: () => CarService.getCars(page, 5, searchTerm),
    refetchOnWindowFocus: false,
  });
  const [carId, setCarId] = useState<number | undefined>()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(carId)
    if (carId) {
      CarService.updateCar(carId, data).then(() => {
        console.log(data)
        refetch().then(r => r)
        reset()
        setSidebarOpened(false)
      })
      return;
    }
    CarService.createCar(data).then(() => {
      refetch().then(r => r)
      reset()
      setSidebarOpened(false)
    })
  }

  const openSidebar = () => {
    setSidebarOpened(true)
  }

  const closeSidebar = () => {
    setSidebarOpened(false)
    if (carId) {
      setCarId(undefined)
      setValue('name', '')
      setValue('imageFile', '')
    }
  }

  const openAlertModal = (id: number) => {
    setCarId(id)
    setAlertModal(true)
  }

  const closeAlertModal = () => {
    setCarId(undefined)
    setAlertModal(false)
  }

  const EditCard = (item: carModel) => {
    setCarId(item.id)
    setValue('name', item.name)
    setValue('imageFile', item.base64)
    openSidebar()
  }

  const DeleteCard = (id: number | undefined) => {
    if (id) {
      CarService.deleteCar(id).then(() => {
        setAlertModal(false)
        refetch().then(r => r)
      })
    }
  }

  const onSubmitSearchTerm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch().then(r => r)
  }

  useEffect(() => {
    refetch().then(r => r)
  }, [page, refetch])

  return {
    cardList,
    openAlertModal,
    EditCard,
    isFetching,
    isError,
    error,
    sidebarOpened,
    closeSidebar,
    onSubmit,
    register,
    handleSubmit,
    errors,
    alertModal,
    closeAlertModal,
    DeleteCard,
    carId,
    onSubmitSearchTerm,
    setSearchTerm,
    setPage,
    openSidebar,
    page,
  };
};
