import { specsHook } from "./hookSpecs";
import IchiroTextField from "../../components/IchiroTextField";
import styles from "./styles.module.css";


export default function FilterDesignSpecs() {

	const { domain, setDomain,
			configuration, setConfiguration,
			response, setResponse,
			approximation, setApproximation,
			ripplePassband, setRipplePassband,
			rippleStopband, setRippleStopband,
			attenuationPassband, setAttenuationPassband,
			attenuationStopband, setAttenuationStopband,
			cutoffFrequency, setCutoffFrequency,
			centerFrequency, setCenterFrequency,
			bandwidth, setBandwidth,
			lowerPassbandEdgeFrequency, setLowerPassbandEdgeFrequency,
			upperPassbandEdgeFrequency, setUpperPassbandEdgeFrequency,
			lowerStopbandEdgeFrequency, setLowerStopbandEdgeFrequency,
			upperStopbandEdgeFrequency, setUpperStopbandEdgeFrequency,
			transitionWidth, setTransitionWidth,
			samplingFrequency, setSamplingFrequency,
			order, setOrder } = specsHook();

	return (

		<div class={styles.screen}>

			<div class={styles.headerSection}>
				<p class={styles.header}>Design specifications</p>
			</div>

			<div class={styles.content}>

				<div class={styles.left}>

					<div class={styles.row}>
		 
						<IchiroTextField label="Passband ripple (dB)"
										 text={ripplePassband}
										 setText={setRipplePassband}
										 mode="decimal" />


						<div class={styles.gap} />

						<IchiroTextField label="Stopband ripple (dB)"
										 text={rippleStopband}
										 setText={setRippleStopband}
										 mode="decimal" />

					</div>

					<div class={styles.row}>
		 
						<IchiroTextField label="Passband attenuation (dB)"
										 text={attenuationPassband}
										 setText={setAttenuationPassband}
										 mode="decimal" />


						<div class={styles.gap} />

						<IchiroTextField label="Stopband attenuation (dB)"
										 text={attenuationStopband}
										 setText={setAttenuationStopband}
										 mode="decimal" />

					</div>

					<div class={styles.row}>
		 
						<IchiroTextField label="Center frequency (Hz)"
										 text={centerFrequency}
										 setText={setCenterFrequency}
										 mode="decimal" />


						<div class={styles.gap} />

						<IchiroTextField label="Bandwidth (Hz)"
										 text={bandwidth}
										 setText={setBandwidth}
										 mode="decimal" />

					</div>

					<div class={styles.row}>
		 
						<IchiroTextField label="Lower passband edge frequency (Hz)"
										 text={lowerPassbandEdgeFrequency}
										 setText={setLowerPassbandEdgeFrequency}
										 mode="decimal" />


						<div class={styles.gap} />

						<IchiroTextField label="Upper passband edge frequency (Hz)"
										 text={upperPassbandEdgeFrequency}
										 setText={setUpperPassbandEdgeFrequency}
										 mode="decimal" />

					</div>

					<div class={styles.row}>
		 
						<IchiroTextField label="Lower stopband edge frequency (Hz)"
										 text={lowerStopbandEdgeFrequency}
										 setText={setLowerStopbandEdgeFrequency}
										 mode="decimal" />

						<div class={styles.gap} />

						<IchiroTextField label="Upper stopband edge frequency (Hz)"
										 text={upperStopbandEdgeFrequency}
										 setText={setUpperStopbandEdgeFrequency}
										 mode="decimal" />

					</div>

					<div class={styles.row}>
		 
						<IchiroTextField label="Transition width (Hz)"
										 text={transitionWidth}
										 setText={setTransitionWidth}
										 mode="decimal" />

					</div>

				</div>

				<div class={styles.right}>

					{/*<div class={styles.row}>
		 
						<IchiroTextField label="Cutoff frequency (Hz)"
										 text={cutoffFrequency}
										 setText={setCutoffFrequency}
										 mode="decimal" />

					</div>*/}

					<div class={styles.row}>
		 
						<IchiroTextField label="Sampling frequency (Hz)"
										 text={samplingFrequency}
										 setText={setSamplingFrequency}
										 mode="decimal" />

						<div class={styles.gap} />

						<IchiroTextField label="Order"
										 text={order}
										 setText={setOrder}
										 mode="integer" />

					</div>

				</div>

			</div>

		</div>

	);

}
