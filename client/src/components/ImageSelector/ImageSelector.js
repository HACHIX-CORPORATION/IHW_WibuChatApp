
					url: '02.jpg',
				},
				{
					id: 2,
					url: 'akame.jpg',
				},
				
					id: 6,
					url: 'hanezawa.jpg',
				},
				{
					id: 7,
					url: 'maisakurajima.jpg',
				},
				{
					id: 8,
					url: 'natusme2.jpg',
				},
				{
					id: 9,
					url: 'rem.jpg',
				},
			],
		};
	},
	methods: {
		// add argument "imagePreview" for onChoose()
		onSelect(imagePreview) {
			// this.imagePreview is hanezawa =  ../assets/{imagePreview}
			this.imagePreview = imagePreview;
		},
	},
};
