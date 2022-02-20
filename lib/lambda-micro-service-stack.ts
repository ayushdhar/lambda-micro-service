import { Stack, StackProps, aws_lambda, Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaMicroServiceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new aws_lambda.Function(this, "backendFn", {
      runtime: aws_lambda.Runtime.NODEJS_14_X,
      handler: "index.handler",
      code: aws_lambda.AssetCode.fromAsset(path.join(__dirname, "../lambda")),
    });
  }
}
