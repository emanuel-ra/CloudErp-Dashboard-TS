import { useCallback, useState } from 'react'
import { type ICustomerUpd } from '../../abstraction/Interfaces/ICustomers'
import { UpdateCustomer } from '../../services/Customer'

interface Props {
  formData: ICustomerUpd
}

export const useCustomerUpd = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const updtCustomer = useCallback(async ({ formData }: Props) => {
    setLoading(true)
    try {
      const mappedData = {
        id: formData.id,
        vchCodigo: formData.vchCodigo,
        vchNombres: formData.vchNombres,
        vchApellidos: formData.vchApellidos,
        vchTelefonos: formData.vchTelefonos,
        vchCorreos: formData.vchCorreos,
        address: formData.address,
        vchRFC: formData.vchRFC,
        vchCodigoPostal: formData.vchCodigoPostal,
        vchComentario: formData.vchComentario,
        idPais: formData.idPais,
        idEstado: formData.idEstado,
        vchNumInt: formData.vchNumInt,
        vchNumExt: formData.vchNumExt,
        external_id: formData.external_id,
        sat_cp: formData.sat_cp,
        sat_razonsocial: formData.sat_razonsocial,
        email_cfdi: formData.email_cfdi,
        sat_regimen_fiscal_clave: formData.sat_regimen_fiscal_clave,
        sat_uso_cfdi_clave: formData.sat_uso_cfdi_clave,
        idStatus: formData.idStatus
      }

      const response: ICustomerUpd = await UpdateCustomer(mappedData)
      return response
    } catch (error) {
      console.error('Error al actualizar los datos:', error)
      return error
    } finally {
      setLoading(false)
    }
  }, [])

  return { updtCustomer, loading }
}
