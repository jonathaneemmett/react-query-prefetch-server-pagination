'use client';

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query';
import React from 'react';

function ReactQueryHydrate(props: HydrateProps) {
	return <RQHydrate {...props} />;
}

export default ReactQueryHydrate;
