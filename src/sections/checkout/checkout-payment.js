import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
// components
import Iconify from 'src/components/iconify';
import FormProvider from 'src/components/hook-form';
//
import { useCheckoutContext } from './context';
import CheckoutSummary from './checkout-summary';
import CheckoutDelivery from './checkout-delivery';
import CheckoutBillingInfo from './checkout-billing-info';
import CheckoutPaymentMethods from './checkout-payment-methods';

// ----------------------------------------------------------------------

const DELIVERY_OPTIONS = [
  {
    value: 0,
    label: 'Gratis',
    description: 'Entrega en 5-7 días',
  },
  {
    value: 10,
    label: 'Standard',
    description: 'Entrega en 3-5 días',
  },
  {
    value: 20,
    label: 'Express',
    description: 'Entrega en 2-3 días',
  },
];

const PAYMENT_OPTIONS = [
  {
    value: 'paypal',
    label: 'Pagar con PayPal',
    description: 'Serás redirigido al sitio web de PayPal para completar tu compra de manera segura.',
  },
  {
    value: 'credit',
    label: 'Tarjeta de crédito / débito',
    description: 'Aceptamos Mastercard, Visa, Discover y Stripe.',
  },
  {
    value: 'cash',
    label: 'Efectivo',
    description: 'Paga en efectivo cuando se entregue tu pedido.',
  },
];

const CARDS_OPTIONS = [
  { value: 'ViSa1', label: '**** **** **** 1212 - Jonatan Rojas' },
  { value: 'ViSa2', label: '**** **** **** 2424 - Pedro L.' },
  { value: 'MasterCard', label: '**** **** **** 4545 - Jose Luis' },
];

export default function CheckoutPayment() {
  const checkout = useCheckoutContext();

  const PaymentSchema = Yup.object().shape({
    payment: Yup.string().required('Payment is required'),
  });

  const defaultValues = {
    delivery: checkout.shipping,
    payment: '',
  };

  const methods = useForm({
    resolver: yupResolver(PaymentSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      checkout.onNextStep();
      checkout.onReset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <CheckoutDelivery onApplyShipping={checkout.onApplyShipping} options={DELIVERY_OPTIONS} />

          <CheckoutPaymentMethods
            cardOptions={CARDS_OPTIONS}
            options={PAYMENT_OPTIONS}
            sx={{ my: 3 }}
          />

          <Button
            size="small"
            color="inherit"
            onClick={checkout.onBackStep}
            startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          >
            Volver
          </Button>
        </Grid>

        <Grid xs={12} md={4}>
          <CheckoutBillingInfo billing={checkout.billing} onBackStep={checkout.onBackStep} />

          <CheckoutSummary
            total={checkout.total}
            subTotal={checkout.subTotal}
            discount={checkout.discount}
            shipping={checkout.shipping}
            onEdit={() => checkout.onGotoStep(0)}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Completas orden
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
