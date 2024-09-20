// Code generated by pulumi-language-go DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package config

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
	"github.com/terrxo/pulumi-k0s/sdk/go/k0s/internal"
)

var _ = internal.GetEnvOrDefault

// Maximum number of hosts to configure in parallel, set to 0 for unlimited
func GetConcurrency(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "k0s:concurrency")
	if err == nil {
		return v
	}
	var value string
	if d := internal.GetEnvOrDefault("30", nil, "PULUMI_K0S_CONCURRENCY"); d != nil {
		value = d.(string)
	}
	return value
}

// Maximum number of files to upload in parallel, set to 0 for unlimited
func GetConcurrentUploads(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "k0s:concurrentUploads")
	if err == nil {
		return v
	}
	var value string
	if d := internal.GetEnvOrDefault("5", nil, "PULUMI_K0S_CONCURRENT_UPLOADS"); d != nil {
		value = d.(string)
	}
	return value
}

// Do not drain worker nodes when upgrading
func GetNoDrain(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "k0s:noDrain")
	if err == nil {
		return v
	}
	var value string
	if d := internal.GetEnvOrDefault("false", nil, "PULUMI_K0S_NO_DRAIN"); d != nil {
		value = d.(string)
	}
	return value
}

// Do not wait for worker nodes to join
func GetNoWait(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "k0s:noWait")
	if err == nil {
		return v
	}
	var value string
	if d := internal.GetEnvOrDefault("false", nil, "PULUMI_K0S_NO_WAIT"); d != nil {
		value = d.(string)
	}
	return value
}

// Skip downgrade check
func GetSkipDowngradeCheck(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "k0s:skipDowngradeCheck")
	if err == nil {
		return v
	}
	var value string
	if d := internal.GetEnvOrDefault("false", nil, "PULUMI_K0S_SKIP_DOWNGRADE_CHECK"); d != nil {
		value = d.(string)
	}
	return value
}
