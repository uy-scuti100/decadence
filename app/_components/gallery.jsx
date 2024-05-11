import Button from "@/components/button-component";

export default function Gallery() {
	return (
		<section className="relative mt-40 maxxy">
			<div className="absolute bg-accent/20 h-[30vh] w-[50vh] -top-32 left-1/3 -z-10 blur-[80px]"></div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
					<div>
						<h3 className="tracking-wider text-center md:text-left text-accent">
							OUR PHOTO GALLERY
						</h3>
						<h2 className="text-3xl font-bold tracking-wider text-center md:text-5xl sm:text-left">
							OUR SHOP IN IMAGES
						</h2>
					</div>

					<p className="justify-end flex-1 max-w-2xl text-base font-normal text-center md:text-right text-dark text-balance">
						Ultimate grooming for the modern men and women. Look and feel your
						best with our skilled stylists and premium products.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-4">
				<div className="grid gap-4">
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-17.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-15.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-9.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/DecadenceHairBeautySalon_UKD_253042_4_xxx-1024x683.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/DecadenceHairBeautySalon_UKD_253042_4_xx-1024x683.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-21.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-19.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/DecadenceHairBeautySalon_UKD_253042_4_x-1024x683.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-12.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-10.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-13.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="object-cover h-full max-w-full rounded-lg"
							src="https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-5.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-20">
				<Button
					link={"/gallery"}
					text={"View Gallery"}
					className={"px-20 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}
