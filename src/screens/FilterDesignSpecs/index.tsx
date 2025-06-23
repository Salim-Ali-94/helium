import { createSignal } from "solid-js";
import { specsHook } from "./hookSpecs";
import IchiroTextField from "../../components/IchiroTextField";
import Tag from "../../components/Tag";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import ProgressStepper from "../../components/ProgressStepper";
import styles from "./styles.module.css";


export default function FilterDesignSpecs() {

	const [currentStep, setCurrentStep] = createSignal(1);

	const { domain, setDomain,
			configuration, setConfiguration,
			// response, setResponse,
			// approximation, setApproximation,
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
			order, setOrder, computeDesign } = specsHook();

	return (

		<div class={styles.screen}>

			<div class={styles.headerSection}>

				<ProgressStepper totalSteps={4}
								 currentStep={currentStep}
								 setCurrentStep={setCurrentStep} />

			</div>

			<div class={styles.content}>

				<div class={styles.left}>

					<div class={styles.topSection}>

						<div class={styles.domainSelection}>
						
							<Tag label="Digital"
								 highlight={{ r: 255, g: 109, b: 255 }}
								 // highlight={{ r: 255, g: 105, b: 180 }}
								 active={domain}
								 setActive={setDomain} />
							
							<div class={styles.gap} />
							
							<Tag label="Analogue"
								 // highlight={{ r: 34, g: 218, b: 244 }}
								 highlight={{ r: 104, g: 233, b: 230 }}
								 active={domain}
								 setActive={setDomain} />

						</div>

						<div class={styles.column}>

							<CheckBox label={(domain() === "digital") ? "IIR" : "Active"}

									  active={(((domain() === "digital") &&
									  		    (configuration() === "iir")) ||
									  		    ((domain() === "analogue") &&
									  		    (configuration() === "active"))) ? true : false}

									  assignActive={event => (((domain() === "digital") &&
											  				   (configuration() !== "iir")) ||
											  				   ((domain() === "analogue") &&
											  				   (configuration() !== "active"))) ? setConfiguration((domain() === "digital") ? "iir" : "active") :
																								  event.preventDefault()} />

							<div class={styles.wedge} />

							<CheckBox label={(domain() === "digital") ? "FIR" : "Passive"}

									  active={(((domain() === "digital") &&
									  			(configuration() === "fir")) ||
									  		    ((domain() === "analogue") &&
									  		   	(configuration() === "passive"))) ? true : false}

									  assignActive={event => (((domain() === "digital") &&
									  						   (configuration() !== "fir")) ||
									  						   ((domain() === "analogue") &&
									  						   (configuration() !== "passive"))) ? setConfiguration((domain() === "digital") ? "fir" : "passive") :
																								   event.preventDefault()} />

						</div>

					</div>

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

						<div class={styles.gap} />

						<IchiroTextField label="Cutoff frequency (Hz)"
										 text={cutoffFrequency}
										 setText={setCutoffFrequency}
										 mode="decimal" />

					</div>

				</div>

				<div class={styles.right}>

					<div class={styles.sectionTop}>

						<Button label="Process design"
								active={(order() || (samplingFrequency() && ripplePassband() && attenuationStopband())) ? true : false}
								submitAction={computeDesign} />

					</div>

					<div class={styles.row}>

						<IchiroTextField label="Order"
										 text={order}
										 setText={setOrder}
										 mode="integer" />

					</div>

					{ (domain() === "digital") && <div class={styles.row}>
		 
														<IchiroTextField label="Sampling frequency (Hz)"
																	   	 text={samplingFrequency}
																	   	 setText={setSamplingFrequency}
																	   	 mode="decimal" />

													</div> }

				</div>

			</div>

		</div>

	);

}
