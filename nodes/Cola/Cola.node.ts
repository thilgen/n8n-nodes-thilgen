import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Cola implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Cola',
		name: 'cola',
		icon: 'file:cola.svg',
		group: ['transform'],
		subtitle: '',
		version: 1,
		description: 'Get the last item',
		defaults: {
			name: 'Cola',
		},
		properties: [],
		inputs: ['main'],
		outputs: ['main'],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let returnData = items;
		returnData = items.slice(items.length - 1, items.length);
		return [returnData];
	}
}
